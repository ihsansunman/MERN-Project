const getNotlar = (req, res) => {
    res.status(200).json({ mesat: "get notlar" });
}

const setNotlar = (req, res) => {
    res.status(200).json({ mesaj: "post not" });
}

const updateNotlar = (req, res) => {
    res.status(200).json({ mesaj: `put ${req.params.id} idli not` });
}

const deleteNotlar = (req, res) => {
    res.status(200).json({ mesaj: `delete ${req.params.id} idli not` });
}

module.exports={
    getNotlar,
    setNotlar,
    updateNotlar,
    deleteNotlar
}