const getNotlar = (req, res) => {
    res.status(200).json({ mesat: "get notlar" });
}

const setNotlar = (req, res) => {
    if(!req.body.mesaj){
        //res.status(400).json({mesaj: 'Lütfen mesaj yazınız.'})
        res.status(400)
        throw new Error('Lütfen mesaj yazınız.')
    }

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