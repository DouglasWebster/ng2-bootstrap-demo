# Ng2BootstrapDemo

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Problem

Combining the tabs module with the alert and/or pagination module gives 
rise to syncrhonisation problems.  
- With the alert module timed dismisals do not dismiss until the mouse is
clicked on an item,
- With the Pagination module and several pagination blocks visible they fall in and
out of synch.

Removing changeDetection.OnPush cures the proble with the alert and pagination
module but then the tabs module can cause errors.

This small project shows the problem with changeDetection.OnPush active.
If changeDetection.OnPush is commented out and the project rebuilt the 
activating the third tab causes a runtime error. 

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
