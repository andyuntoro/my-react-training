import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';

export default function TransferRedux() {
    const saldo = useSelector(state => state.saldo)
    const dispatch = useDispatch()

    return (
        <Fragment>
            <div>
                <br />
                Saldo anda adalah : Rp. {saldo}
                <br />
                <hr />
                Apakah mau tambah saldo?
                <br />
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 m-5 rounded" onClick={() => dispatch({type: "DEPOSIT", value: 1000})}>Tambah Rp.1000</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded" onClick={() => dispatch({type: "DEPOSIT", value: 5000})}>Tambah Rp.5000</button>
                <hr />
                Apakah mau tarik saldo?
                <br/>
                {/* <button onClick={() => this.tarikSaldo1000()}>Tarik Rp.1000</button> */}
                <Button klik={() => dispatch({type: "WITHDRAW", value: 1000})} text={"Tarik Rp. 1000"}/>
            </div>
        </Fragment>
      )
}