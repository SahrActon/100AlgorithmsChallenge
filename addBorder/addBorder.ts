function addBorder(picture: string[]): any {
    
    const wall = '*'.repeat(picture[0].length + 2)

    picture.unshift(wall); // this is will shot the wall to the front 
    picture.push(wall) // this is will shot the wall to the back
    

    for (let i =1; i< picture.length -1; i++){
        picture[i] = '*'.concat(picture[i], '*')
    }
    
    return picture;
}

console.log(addBorder(["abc", "ded"]));
// can you see this