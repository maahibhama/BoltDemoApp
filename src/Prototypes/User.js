export function User(json) {
    if (json == undefined) { return }

    this.id = json.id
    this.name = json.name
    this.email = json.email
}

User.shared = new User()