// problem
const name = "Myat";

/* solution 1 
export empty, or import empty 
(if you don't import or export anything, it will be treated as a global script) */
// import "";
// export {}

/* solution 2
add  "moduleDetection": "force" to compilerOptions (every file is treated as module file)
(default is auto and find import, export statement)
*/
