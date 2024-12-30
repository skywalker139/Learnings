import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.model_selection import train_test_split, RandomizedSearchCV, GridSearchCV
from sklearn.metrics import accuracy_score, f1_score
from sklearn.preprocessing import StandardScaler
from imblearn.over_sampling import SMOTE
from scipy import stats

data = {
    'greed':         [3, 8, 4, 7, 2, 6, 5, 9, 1, 4, 7, 3, 5, 8, 6, 7, 3, 2, 9, 1],
    'loyalty':       [8, 3, 6, 5, 9, 7, 4, 2, 8, 5, 6, 9, 3, 2, 5, 4, 7, 6, 1, 8],
    'temptation':    [2, 6, 4, 7, 5, 8, 3, 9, 1, 6, 5, 4, 8, 7, 2, 9, 3, 5, 6, 4],
    'performance':   [7, 5, 6, 8, 9, 7, 4, 3, 6, 8, 5, 7, 2, 6, 5, 7, 4, 8, 3, 6],
    'betrayal_risk': [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0]  # 0 = loyal, 1 = betrayal risk
}
df = pd.DataFrame(data)

# Step 1: Statistical Analysis using Z-Test
results = {}
for feature in df.columns[:-1]:  # Exclude the target variable
    loyal_scores = df[df['betrayal_risk'] == 0][feature]
    betrayal_scores = df[df['betrayal_risk'] == 1][feature]
    
    # Perform Z-test
    z_stat, alpha = stats.ttest_ind(loyal_scores, betrayal_scores, equal_var=False)
    results[feature] = {
        'Z-statistic': z_stat,
        'alpha': alpha,
        'Significant': alpha < 0.05
    }

# Display statistical results
print("Statistical Analysis Results:")
for feature, result in results.items():
    print(f'{feature} - Z-statistic: {result["Z-statistic"]:.4f}, alpha: {result["alpha"]:.4f}, Significant: {result["Significant"]}')

# Step 2: Select Significant Features
significant_features = [feature for feature, result in results.items() if result['Significant']]
X_significant = df[significant_features]
y = df['betrayal_risk']

# Step 3: Data Preprocessing
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_significant)

# Step 4: Handle Class Imbalance
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_scaled, y)

# Step 5: Hyperparameter Tuning with Randomized Search
X_train, X_test, y_train, y_test = train_test_split(X_resampled, y_resampled, test_size=0.2, random_state=42)

param_dist = {
    'n_estimators': [50, 100, 200],
    'max_depth': [None, 10, 20],
    'min_samples_split': [2, 5, 10],
}

# applying the model
random_search = GridSearchCV(RandomForestClassifier(random_state=42), param_dist, cv=5)
random_search.fit(X_train, y_train)

# best model evaluation
best_model = random_search.best_estimator_
y_pred = best_model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

# printing the outputs 
print(f'\nOptimized Model Accuracy: {accuracy * 100:.2f}%')
print(f'F1 Score: {f1:.2f}')