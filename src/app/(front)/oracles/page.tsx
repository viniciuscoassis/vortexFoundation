"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import Image from 'next/image';
import oraclesAbi from '../../../abi/oracles.json';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useOraclesStore from '@/store/oracles';
import { Progress } from '@/components/ui/progress';

interface OracleAttribute {
    trait_type: string;
    value: string;
}

interface Oracle {
    name: string;
    description: string;
    image: string;
    external_url: string;
    background_color: string;
    attributes: OracleAttribute[];
}

export default function Page() {
    const { oracles, loadingProgress, setOracles } = useOraclesStore();

    useEffect(() => {
        if(oracles.length === 0) setOracles();
      } 
      , [setOracles, oracles.length]);
    
    if (loadingProgress < 100) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
                <h1 className="text-6xl font-bold text-secondary-foreground">
                    Loading...
                </h1>
                <p className="text-lg text-secondary-foreground">
                    {loadingProgress.toFixed(2)}%
                </p>
                <Progress value={loadingProgress} className="w-[60%]" />
            </div>
        );
    }

    return (
        <section className="bg-secondary mx-auto text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2 min-h-screen">
            {oracles.map((oracle, index) => (
                <Card key={index} className="w-full flex flex-col hover:shadow-lg transition duration-300 ease-in-out">
                    <CardHeader className='bg-card flex flex-col items-center justify-center p-4 rounded-t-lg'>
                        <CardTitle className="text-xl font-bold mt-2">{oracle.name}</CardTitle>
                        <CardDescription>{oracle.description}</CardDescription>
                    </CardHeader>
                    <CardContent className='flex-grow flex items-center justify-center'>
                        <Image src={oracle.image.replace('ipfs://', 'https://ipfs.io/ipfs/')} alt={oracle.name} layout="responsive" width={400} height={400} className="rounded-lg" />
                    </CardContent>
                </Card>
            ))}
        </section>
    );
}
