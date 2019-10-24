#!/bin/awk -f

{
    for(i = 1; i <= NF; i++){
        count[$i]++
    }
}

END {   command = "sort > output.txt"

        for (word in count){
            print word":", count[word] | commmand
        }
}
