import pool from "../connect.js";

export const getAds = async (req, res) => {
    // console.log("getAds???????");
    try {
        const allAds = await pool.query("SELECT \"advertisement\".*, \"service_provider\".service_name,\"service_provider\".location , \"users\".contact_no FROM advertisement INNER JOIN \"service_provider\" ON advertisement.user_id = \"service_provider\".user_id INNER JOIN \"users\" ON \"service_provider\".user_id = \"users\".user_id;");
        res.json(allAds.rows);
        // console.log(allAds.rows);

    }
    catch (err) {
        console.error(err.message)
    }
};
