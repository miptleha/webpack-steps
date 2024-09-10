export function hello(name: string) {
    console.log(`hello ${name}!`)
}

export function errorFunc() {
    console.log('raise error');
    throw new Error('unexpected error');
}