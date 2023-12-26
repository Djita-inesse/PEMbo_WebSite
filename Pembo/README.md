# Project Name

[Project Description]

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Mock Data Generation](#mock-data-generation)
  - [Overview](#overview)
  - [Location](#location)
  - [Running the Script](#running-the-script)
  - [Integration in Development Workflow](#integration-in-development-workflow)
  - [Customizing Data Generation](#customizing-data-generation)
  - [Best Practices](#best-practices)
  - [Support](#support)
- [Contributing](#contributing)
- [License](#license)

## Installation

[Instructions for installing the project]

## Usage

[Instructions or examples for using the project]

## Mock Data Generation

### Overview
The `generateData.js` script is a utility tool for generating mock data for the application's development and testing environments. It uses Faker.js to create realistic data models for various entities including users, addresses, categories, products, reviews, carts, cart items, orders, and order items. This script helps simulate the application's behavior with data that resembles production while ensuring that no real user data is used in development or testing.

### Location
The script is located in the `scripts` directory at the root of the project:


### Running the Script
To generate mock data, ensure you have Node.js installed and run the following command from the root of the project:

```bash
rm -f src/assets/mockData.json && node scripts/generateData.js > src/assets/mockData.json
