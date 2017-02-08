# Health IQ - Technical Coding Project (Blood Sugar Simulator)


[![travis-ci](https://api.travis-ci.org/shanemileham/healthiq-project.svg?branch=master)](https://travis-ci.org/shanemileham/healthiq-project)
[![codecov](https://codecov.io/gh/shanemileham/healthiq-project/branch/master/graph/badge.svg)](https://codecov.io/gh/shanemileham/healthiq-project)

## Blood Sugar Simulator

This simulator can be run using the following command:

`npm run sim exampleInput.json`

## Project Description

Simulator I/O:
- I: inputs of two types, food and exercise, each with a timestamp.  
- O: output should be a “graph” of blood sugar over the course of the day, and
   a graph of the amount of “glycation” that occurred during the day.  

Food:
- In our model, eating food will increase blood sugar linearly for two hours.  
- The rate of increase depends on the glycemic index column.

Exercise:
- Exercise decreases blood sugar linearly for one hour.

Normalization:
- Blood sugar starts at 80 at the beginning of the day.
- If neither food nor exercise is affecting your blood sugar
(it has been more than 1 or 2 hours),
it will approach 80 linearly at a rate of 1 per minute.

Glycation:
- For every minute your blood sugar stays above 150, increment “glycation” by 1.


## Explanation

I/O Decisions:
- Because normalization changes blood sugar values every minute, I used a **time
interval of one minute**.
- Because output graphs are for a single day, I shifted and truncated timestamps
so that **timestamps are integers between 0 and 1440**
(number of minutes in a day).
- Input and Output will be in JSON format for simplicity.

Solution Phases:
1. Read inputs (Assume they are well-formed)
2. Convert inputs to influence array (which represents the influence of food or
  exercise on blood sugar based on time of the day)
3. Create blood sugar array from influence array (using the above rules of food,
  exercise, and normalization)
4. Create a glycation array from blood sugar array (using the above rule of
  glycation)
5. Output blood sugar and glycation arrays
