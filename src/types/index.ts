export type User = {
    username: string,
    name: string,
    email: string,
    _id: string,
    description: string,
    image: string,
    links: string
}

export type PublicUserData = Pick<User, 'username' | 'description' | 'name' | 'image' | 'links'> 

export type RegisterForm = Pick<User, 'username' | 'email' | 'name'> & {
    password: string
    password_confirmation: string
}

export type LoginForm = Pick<User, 'email'> & {
    password: string
}

export type ProfileForm = Pick<User, 'username' | 'description'>

export type SocialNetwork = {
    id: number,
    name: string,
    url: string,
    enabled: boolean
}

export type devTreeLink = Pick<SocialNetwork, 'name' | 'url' | 'enabled'>