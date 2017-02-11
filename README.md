# Health IQ - Technical Coding Project (Blood Sugar Simulator)


[![travis-ci](https://api.travis-ci.org/shanemileham/healthiq-project.svg?branch=master)](https://travis-ci.org/shanemileham/healthiq-project)
[![codecov](https://codecov.io/gh/shanemileham/healthiq-project/branch/master/graph/badge.svg)](https://codecov.io/gh/shanemileham/healthiq-project)

## Blood Sugar Simulator

(_First install packages with `npm install`_)

This simulator can be run using the following commands:

`npm run server` (will start the server)

`npm run sim exampleInput.json` (will run the simulator)

The documentation can be viewed with the following command:

`npm run docs`

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
- Input will be in JSON format for simplicity.

Solution Phases:
1. Read inputs (Assume they are well-formed)
2. Lookup exercise or glycemic index from DB and add to input object
3. Convert inputs to influence array (which represents the influence of food or
  exercise on blood sugar based on time of the day). 1440 - one for each minute.
4. Create blood sugar array from influence array (using the above rules of food,
  exercise, and normalization). 1441 points to include both midnights.
5. Create a glycation array from blood sugar array (using the above rule of
  glycation). 1441 points to include both midnights.
6. Output blood sugar and glycation arrays
7. Open graphs of the output
