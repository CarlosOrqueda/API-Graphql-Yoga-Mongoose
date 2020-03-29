import User from './models/User'

export const resolvers = {
    
    Query: {
        getUser: async (_,{id}) => {
            return await User.findById(id).lean()
        },
        getUsers: async () => {
            return await User.find().lean(); 
        }
    },
    Mutation: {
        createUser: async (_, {nickname, fullname, phone, city}) => {
            const newUser = new User({nickname, fullname, phone, city})
            return await newUser.save()
        },
        updateUser: async (_, {id, nickname, fullname, phone, city}) => {
            const userUpdate = {}
            if(nickname)
                userUpdate.nickname = nickname
            if(fullname)
                userUpdate.fullname = fullname
            if(phone)
                userUpdate.phone = phone
            if(city)
                userUpdate.city = city
            return await User.findByIdAndUpdate(id,userUpdate, {new: true}).lean()
        },
        deleteUser: async (_, {id}) => {
            return await User.findByIdAndDelete(id).lean()
        }
    }
}