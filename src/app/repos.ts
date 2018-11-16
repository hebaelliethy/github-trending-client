export interface repos{

    author:string;
    name:string;
    href:string;
    description:string;
    language:string;
    stars:number;
    forks:number;
    starsToday:number;
    SumStars:number;
    
};

export interface reposResult{

    Repositry :repos[];
    SumStars:number;
};