export const name = 'jiaHang'
export const age = 18

class A {
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log(this.name)
    }
}

export let a = new A('HI')