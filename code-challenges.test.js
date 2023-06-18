// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
describe('', () => {
  it('', () => {
    expect().toEqual()
  })
})
// a) Create a test with an expect statement using the variable provided.


describe('collapseTheObjects', () => {
  it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized.', () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(collapseTheObjects(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    expect(collapseTheObjects2(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    expect(collapseTheObjects3(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })

})

const collapseTheObjects = (array) => {
  return array.reduce((acc, value) => {
      acc.push(Object.values(value)[0].split(' ').map(value =>  {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }).join(' ')+ ' is ' + Object.values(value)[1]+".")
      return acc
  }, [])
}
 

const collapseTheObjects2 = (array) => {
  return array.map((value) => {
     return  Object.values(value)[0].split(' ').map(value =>  {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }).join(' ')+ ' is ' + Object.values(value)[1]+"."
      
  })
}

const collapseTheObjects3 = (array) => {
  return array.map((value) => {
    return value.name.replace(/\b\w/g, match => match.toUpperCase()) + ' is ' + value.occupation+"."
      
  })
}




// b) Create the function that makes the test pass.


// Pseudo code: 

// The function accepts one argument, it's expecting an array of objects.
// The first step is to start iterating over the array, pretty sure you could make it work with literally any iterator you want, I chose map and reduce.
// The first iterator gets us access to our Objects. 
// While dealing with the objects we have two key value pairs
// The first K-V pair needs to be capitalized while the second simply needs to be concatenated with 'is' and a period
// We can accomplish this with another iterator or with replace as in solution 3


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]



describe('giveRemainderWithThree', () => {
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the  numbers when divided by 3.', () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

    expect(giveRemainderWithThree1(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(giveRemainderWithThree2(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
// b) Create the function that makes the test pass.

const giveRemainderWithThree1 = (array) => {
    return array.reduce((acc, value) => {
      if (typeof value === 'number' ){
        acc.push(value%3)
      } 
      return acc
    }, [])
}

const giveRemainderWithThree2 = (array) => array.filter(value => typeof value === 'number').map(value => value%3)

//As much as I prefer to use a single iterator when possible, I did want to get it one line


// Pseudo code: 
// Create a function that has one parameter
// We are expecting an array of mixed data types
// We can filter and modulate he values wih a single HOF if we use reduce 
// Simply use a conditional to check for numbers and push the remainder value to the accumulating array
// Or we can filter the array with a seperate function, then modulate the values with a second, via method chaining

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


describe('myCubeAndSum', () => {
  it('', () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
      expect(myCubeAndSum(cubeAndSum2)).toEqual(1125)
      expect(myCubeAndSum(cubeAndSum1)).toEqual(99)
      

    })
    })

const myCubeAndSum = (array) => array.reduce((acc, value) => acc += value**3, 0)


//now THATS a one-liner

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function that is expecting an array of numbers
// Use reduce to cube and sum the values 
// We could do this one with any iterator, but reduce has a built in variable, which saves me computer memory and typing.
// also using two implicit returns in one line is just cool
