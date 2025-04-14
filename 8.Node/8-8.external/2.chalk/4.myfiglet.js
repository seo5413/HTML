const asciiFont = {
    H:[
        '|__|',
        '|  |',
    ],
    
    E:[
        ' __ ',
        '|__ ',
        '|__ ',
        
    ],
    
    L:[
        '|   ',
        '|   ',
        '|__ ',
        
    ],
    
    O:[
        ' _ ',
        '| |',
        '|_|',
        
    ]

}
function printAsciiArt(text){
    const chars = text.toUpperCase().split('');

    for(let line = 0; line <3 ;i++){
        let output = '';
        for(const ch of chars){
            output += (asciiFont[ch] ? asciiFont[ch][line] : '  ') + '';
        }
        console.log(output);
    }
}