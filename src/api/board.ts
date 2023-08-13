type CreateBoardResp = { success : true } | {
    success: false
    error: string
} 

export const createBoard = async (name: string): Promise<CreateBoardResp> => {
    try {
        //check if board exist
        const board = localStorage.getItem(name)
        if (board) return { success: false, error: `board with name ${name} already exists.` }

        const boards = await getAllBoards()
        boards.push(name)

        localStorage.setItem("boards", JSON.stringify(boards))
        localStorage.setItem(name, JSON.stringify([]))

        return { success: true }
        
    } catch {
        return { success: false , error: "something went wrong."}
    }
}

export const getAllBoards = async () => {
    const boards = localStorage.getItem("boards")
    if (!boards) return [] as string[] 
    return JSON.parse(boards) as string[]
}