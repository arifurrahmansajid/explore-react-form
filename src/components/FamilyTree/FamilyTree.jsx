import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css';

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money, setMoney] = useState(0);

    const asset = 'diamond';
    const newAsset = 'gold';

    const takeMoney = () => {
        setMoney(0);
    };

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family Money: {money}</h4>
            <button onClick={takeMoney}>Take All Money</button>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default FamilyTree;