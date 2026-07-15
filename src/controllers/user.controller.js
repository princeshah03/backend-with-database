import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {
    res.status.json({
        message: "OK"
    })
})

export {
    registerUser,
}