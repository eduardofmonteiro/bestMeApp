const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
   process.stdout.write("\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", (data) => {
    answers.push(data.toString().trim()) 
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})
process.on('exit', () => {
    console.log(`
    Show man!

    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te deixou boladão foi:
    ${answers[1]}
    
    O que te deixou feliz hoje:
    ${answers[2]}
    
    voce ajudou ${answers[3]} pessoas hoje!
    `)
})
