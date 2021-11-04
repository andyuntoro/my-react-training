import React, {useState, useEffect, Fragment} from "react";

export default function UserList(){
    const [users, setUsers] = useState([])

    const getUser = async () =>{
        try {
            const raw = await fetch('http://jsonplaceholder.typicode.com/users')
            const data = await raw.json()
            // console.log(data)
            // const names = data.map(a => a.name) //ini manggil property name
            // const phones = data.map(a => a.phone)
            // setMembers(names)
            // setNohp(phones)
            setUsers(data)
        // const names = 
        } catch (error) {
            console.log('Data Error')
        }
    }

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
            setTimeout(() => {
            alert('load data')
            getUser()
        }, 5000)
    }

    return (
        <Fragment>
            <div className="bg-gray-100 rounded-xl p-8 mt-10 mb-10 mx-80">
                <div className="space-y-4 mt-8">
                    {users.map((user, id) => (
                        <span className="bg-blue-200 block rounded-md" key={id}>{user.name} {user.phone}</span>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}