class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (this.email === email & this.password === password) {
            console.log(`${this.fullname}: Login sucess!`)
        } else {
            console.log(`${this.fullname}: Login failed!`)
        }
    }
}

const John = new User(
    'John',
    'luiseisabelle@gmail.com',
    '1234'
)
John.login('luiseisabelle@gmail.com', '1234')
John.login('luiseisabellegmail.com', '1234')

