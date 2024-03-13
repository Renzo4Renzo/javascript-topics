/*
  COMPILATION VS INTERPRETATION
  Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.
  Interpretation: Interpreter runs through the source code and executes it line by line

  JavaScript does Just-in-Time (JIT) compilation: The entire code is converted into machine code at once, then executed inmediately.

  JAVASCRIPT ENGINE
  Program that executes the code.
  Steps: Parsing -> Compilation -> Execution -> Optimization
                          ^---------------------------' 
  COMPONENTS
    1. Call stack: where execution contexts get stacked and primitives are stored. The code inside the execution context located at the top of the stack is the one running.
    2. Memory heap: this is where objects are stored in memory.

  JAVASCRIPT RUNTIME (In the browser)
  It contains:
    1. JS ENGINE
    2. WEB APIs (Additional tools like DOM manipulation, HTTP Requests, timers, etc. that can't be perform through the core JavaScript).
    3. Callback queue (async functions are added here when they are ready to be executed).
  
  Event Loop: It is constantly running process that monitors both the callback queue and the call stack. When functions in the callback queue are ready and the call stack is empty, these functions are passed to the call stack.
*/
