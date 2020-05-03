import React, { useState, useEffect } from 'react'
import './App.css'
import { getWeb3 } from './utils'
import './styles.css'

const App = () => {
  const [web3, setWeb3] = useState(null)
  const [accounts, setAccounts] = useState(null)
  const [contract, setContract] = useState(null)
  const [network, setNetwork] = useState(undefined)
  const [ethBalance, setEthBalance] = useState(0)
  const [tornadoBalance, settornadoBalance] = useState(0)
  const [loaded, setLoaded] = useState(false)

  async function changeTornadoBalance () {
    console.log('Button Pushed')
    settornadoBalance(50)
  }



  useEffect(() => {
    const init = async () => {
      const _web3 = await getWeb3()
      const _accounts = await _web3.eth.getAccounts()
      const _network = await _web3.eth.net.getId()
      setNetwork(_network)

      /* const _contract = new web3.eth.Contract(
       abi, deployedNetwork && deployedNetwork.address,
      ); */
      // setContract(_contract);
      console.log('web3', _web3)
      setWeb3(_web3)
      setAccounts(_accounts)
      console.log('accounts', _accounts)
      setLoaded(true)
    }
    init()
  }, [])

  return (
    <div className='App'>
          <>
            <p>Your ETH Balance: {ethBalance} ETH</p>
            <p style={{ marginBottom: 20 }}>
              Your Tornado Balance: {tornadoBalance} ETH
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <button onClick={() => changeTornadoBalance()}>
                  Change Tornado Balance to 50
                </button>
              </div>
            </div>
          </>
      </div>
  )
}

export default App
