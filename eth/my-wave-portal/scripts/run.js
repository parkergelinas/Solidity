const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const fuckContractFactory = await hre.ethers.getContractFactory('FuckPortal');
    const fuckContract = await fuckContractFactory.deploy();
    await fuckContract.deployed();
  
    console.log("Contract deployed to:", fuckContract.address);
    console.log("Contract deployed by:", owner.address);
  
    let fuckCount;
    fuckCount = await fuckContract.getTotalFucks();
    
    let fuckTxn = await fuckContract.fuck();
    await fuckTxn.wait();
  
    fuckCount = await fuckContract.getTotalFucks();

    fuckTxn = await fuckContract.connect(randomPerson).fuck();
    await fuckTxn.wait();

    fuckCount = await fuckContract.getTotalFucks();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();