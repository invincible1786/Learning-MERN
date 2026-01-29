export const getAllNote = (req,res) => {
    res.status(200).send("You fetched all the notes");
};

export const createNote = (req,res) => {
    res.status(201).json({message: "Node created"});
};

export const updateNote = (req,res) => {
    res.status(200).json({message: "Node updated"});
};

export const deleteNote = (req,res) => {
    res.status(200).json({message: "Node deleted"});
};