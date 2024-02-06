import pandas as pd

# Make the tas DataFrame
tas = pd.DataFrame([
    {'ta_name': 'Ryan',   'ta_id': 1},
    {'ta_name': 'Nicole', 'ta_id': 3},
])
print('tas')
print(tas)
print()

# Make the grading DataFrame
grading = pd.DataFrame([
    {'grader_id': 2, 'student_name': 'Flora'},
    {'grader_id': 3, 'student_name': 'Paul'},
    {'grader_id': 3, 'student_name': 'Wen'},
    {'grader_id': 3, 'student_name': 'Andrew'},

])
print('grading')
print(grading)
print()

# Join the datasets by ta_id and grader_id
merged = tas.merge(grading, left_on='ta_id', right_on='grader_id', how = "outer")
print('merged')
print(merged)