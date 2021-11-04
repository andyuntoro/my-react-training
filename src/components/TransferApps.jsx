import React, { Fragment, useState } from 'react'
import Button from './Button';

export default function SaldoHooks() {
    const [saldo, setSaldo] = useState(0)

    const deposit = (value) => {
        setSaldo(saldo + value);
    }

    const withdraw1000 = () => {
        const confirmation = window.confirm("Apakah Anda yakin ?")
        if (confirmation)
            setSaldo(saldo - 1000);
    }

    return (
        <Fragment>
            <div>
                <br />
                Saldo anda adalah : Rp. {saldo}
                <br />
                <hr />
                Apakah mau tambah saldo?
                <br />
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 m-5 rounded" onClick={() => deposit(1000)}>Tambah Rp.1000</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded" onClick={() => deposit(5000)}>Tambah Rp.5000</button>
                <hr />
                Apakah mau tarik saldo?
                <br/>
                {/* <button onClick={() => this.tarikSaldo1000()}>Tarik Rp.1000</button> */}
                <Button klik={() => withdraw1000()} text={"Tarik Rp. 1000"}/>
            </div>
        </Fragment>
      )
}