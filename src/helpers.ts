import bcrypt from "bcryptjs"

export const encodePassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    return hash
}

export const parseUserIdCookie = (cookie: string) => {
    const cookieList = cookie.split(";")
    const userIdCookie = decodeURIComponent(cookieList.find(item => item.includes("userId"))?.split("=")[1] as string)
    const userId = parseInt(userIdCookie.split(":")[2].split("}")[0])

    return userId
}