export const searchText = async (req, res) => {
    try {
        const { query } = req.params;
        const allPosts = await pool.query("SELECT * FROM post WHERE content LIKE $1", ['%' + query + '%']);
        res.json(allPosts.rows);
    }
    catch (err) {
        console.error(err.message)
    }
};
