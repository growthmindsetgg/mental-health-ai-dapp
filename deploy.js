async function main() {
    const [deployer] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("MentalHealthSupport");
    const contract = await Contract.deploy();
    await contract.deployed();

    console.log("MentalHealthSupport deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
