"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    const [oraclesLoading, setOraclesLoading] = useState<boolean>(true);
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

            let tempOracles: Oracle[] = [];
            
            for (let i = 0; i < tokenCount; i++) {
                const tokenURI: string = await contract.methods.tokenURI(i).call();
                const response = await axios.get(tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/'));
                tempOracles.push(response.data);
            }
            setOraclesLoading(false);
            setOracles(tempOracles);

        }
        fetchNFTData();
    }, []);

    return (
        <section className="bg-secondary mx-auto text-white grid grid-cols-5 gap-4 p-2 min-h-screen">
            {oracles.map((oracle, index) => (
    oracle.name !== 'Morpho_b' && (
        <Card key={index} className="w-[350px] h-[550px] flex flex-col">
            <CardHeader>
                <CardTitle className="text-xl font-bold mt-2">{oracle.name}</CardTitle>
                <CardDescription>{oracle.description}</CardDescription>
            </CardHeader>
            <CardContent className=' flex-grow flex items-center justify-center'>
                <Image src={oracle.image.replace('ipfs://', 'https://ipfs.io/ipfs/')} alt={oracle.name} width={300} height={300} className="rounded-lg"/>
            </CardContent>
        </Card>
    )
))}
        </section>
    );
}
