export type User = {
    handle: string,
    name: string,
    email: string,
    _id: string,
    description: string,
    image: string,
    links: string
}

export type PublicUserData = Pick<User, 'handle' | 'description' | 'name' | 'image' | 'links'> 

export type RegisterForm = Pick<User, 'handle' | 'email' | 'name'> & {
    password: string
    password_confirmation: string
}

export type LoginForm = Pick<User, 'email'> & {
    password: string
}

export type ProfileForm = Pick<User, 'handle' | 'description'>

export type SocialNetwork = {
    id: number,
    name: string,
    url: string,
    enabled: boolean
}

export type devTreeLink = Pick<SocialNetwork, 'name' | 'url' | 'enabled'>