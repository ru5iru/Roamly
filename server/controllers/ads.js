export const getAds = async (req, res) => {
    try {
        const allAds = await pool.query("SELECT * FROM ad");
        res.json(allAds.rows);
        console.log(allAds.rows);

    }
    catch (err) {
        console.error(err.message)
    }
};
