//Exercise:37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string ="Large",messagePrint:string="I love Typescript"){
    console.log(`Creating a ${size} shirt with the print on shirt ${messagePrint}. `);
    
}
make_shirt()
make_shirt("Medium")