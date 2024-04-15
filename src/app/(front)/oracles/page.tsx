"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import aabi from '../../../abi/oracles.json';

// Define an interface for the attributes of an oracle
interface OracleAttribute {
    trait_type: string;
    value: string;
}

// Define the interface for the Oracle object
interface Oracle {
    name: string;
    description: string;
    image: string;
    external_url: string;
    background_color: string;
    attributes: OracleAttribute[];
    customImage: string;
    customAnimationUrl: string;
}

export default function Page() {
    const [oracles, setOracles] = useState<Oracle[]>([]);
    const contractAddress = '0x4d5ea4d0a31965531146e81689c224f2929ae3e2';
    const abi = aabi;
    const fantomRpcUrl = "https://rpc.ftm.tools/"; // Example Fantom RPC URL

    useEffect(() => {
        const web3 = new Web3(fantomRpcUrl);
        const contract = new web3.eth.Contract(abi, contractAddress);
        async function fetchNFTData() {
            // const promises = Array.from({ length: 100 }).map((_, index) => {
            //     return contract.methods.tokenURI(index).call().then( uri => {
            //         uri = uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
            //         return axios.get(uri).then(res => res.data);
            //     });
            // });
            // const results = await Promise.all(promises);

            // setOracles(results);
            const tokenCount: number = await contract.methods.totalSupply().call();
            if(tokenCount == 0) return;

            for (let i = 0; i < tokenCount; i++) {
                const tokenURI: string = await contract.methods.tokenURI(i).call();
                const response = await axios.get(tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/'));
                setOracles([...oracles, response.data]);
            }

        }
        fetchNFTData();
    }, []);

    return (
        <section className="bg-gray-800 text-white grid grid-cols-1 md:grid-cols-3 gap-4 p-4 min-h-screen">
            {oracles.map((oracle, index) => (
                <Card key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg">
                    <Image src={oracle.image.replace('ipfs://', 'https://ipfs.io/ipfs/')} alt={oracle.name} width={100} height={100} className="rounded-lg"/>
                    <h2 className="text-xl font-bold mt-2">{oracle.name}</h2>
                    <h2 className="mt-1">{oracle.description}</h2>
                </Card>
            ))}
        </section>
    );
}
