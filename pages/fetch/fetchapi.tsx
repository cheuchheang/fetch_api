import React, { useEffect, useState } from "react";
import createApi from "./createApi";
import updateApi from "./updateApi";
import deleteApi from "./deleteApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  ButtonBase,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Dialog,
  DialogTitle,
  ButtonGroup,
  Stack,
} from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import CloseIcon from "@mui/icons-material/Close";

export async function getServerSideProps(ctx: any) {
  const res = await fetch("http://localhost:3000/place/articlesnew");
  const users = await res.json();
  return {
    props: { users },
  };
}

const Fetchapi = ({ users }: any) => {
  const [open, setOpen] = useState();
  const notify = () => toast("Wow so easy !");
  const [openUpdate, setOpenUpdate] = useState();
  const [id, setId] = useState();
  const [value, setValue] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target.elements;
    // console.log(form);
    try {
      await createApi("http://localhost:3000/place/articlesnew", {
        title: form.title.value,
        text: form.text.value,
        authorName: form.authorName.value,
        image: form.image.value,
      });
      // console.log(title);
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenUpdate = async (id: any) => {
    setOpenUpdate(true);
    setId(id);
    setValue(users.data.find((x: any) => x._id === id));
  };
  console.log(value);

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const handleSubmitUpdate = async (e: any) => {
    e.preventDefault();
    const form = e.target.elements;
    // console.log(form);
    try {
      await updateApi(`http://localhost:3000/place/articlesnew/${id}`, {
        title: form.title.value,
        text: form.text.value,
        authorName: form.authorName.value,
        image: form.image.value,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: any) => {
    console.log(id);

    try {
      await deleteApi(`http://localhost:3000/place/articlesnew/${id}`);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <button onClick={notify}>Notify !</button>
        <ToastContainer />
      <Box>
        <Typography
          align="center"
          variant="h4"
          sx={{ backgroundColor: "green" }}
        >
          All User
        </Typography>
        {users.data.map((user: any) => (
          <>
            <ListItem sx={{ padding: "10px", border: "1px solid black" }}>
              <ListItemIcon>
                <AndroidIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6">{user.title}</Typography>
                {user.text}
              </ListItemText>
              <ButtonGroup>
                <Button
                  color="success"
                  onClick={() => handleOpenUpdate(user._id)}
                >
                  Update
                </Button>
                <Button color="success" onClick={() => handleDelete(user._id)}>
                  Delete
                </Button>
              </ButtonGroup>
            </ListItem>
          </>
        ))}
        <div>
          <Button
            sx={{ margin: "10px 0" }}
            color="success"
            variant="contained"
            fullWidth
            onClick={handleOpen}
          >
            Create
          </Button>
        </div>
      </Box>
      <Dialog open={open} sx={{ width: "500px" }}>
        <Stack direction="row">
          <DialogTitle>Create new Article</DialogTitle>
          <CloseIcon onClick={handleClose} />
        </Stack>

        <form onSubmit={handleSubmit}>
          <div>
            <label>title</label>
            <input type="text" name="title" placeholder="title" />
          </div>
          <div>
            <label>text</label>
            <input type="text" name="text" placeholder="text" />
          </div>
          <div>
            <label>authorName</label>
            <input type="text" name="authorName" placeholder="authorName" />
          </div>
          <div>
            <label>image</label>
            <input type="text" name="image" placeholder="image" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Dialog>

      {/* Update */}

      {value && (
        <Dialog open={openUpdate} sx={{ width: "500px" }}>
          <Stack direction="row">
            <DialogTitle>Update Article</DialogTitle>
            <CloseIcon onClick={handleCloseUpdate} />
          </Stack>

          <form onSubmit={handleSubmitUpdate}>
            <div>
              <label>title</label>
              <input
                type="text"
                name="title"
                placeholder="title"
                defaultValue={value.title}
              />
            </div>
            <div>
              <label>text</label>
              <input
                type="text"
                name="text"
                placeholder="text"
                defaultValue={value.text}
              />
            </div>
            <div>
              <label>authorName</label>
              <input
                type="text"
                name="authorName"
                placeholder="authorName"
                defaultValue={value.authorName}
              />
            </div>
            <div>
              <label>image</label>
              <input
                type="text"
                name="image"
                placeholder="image"
                defaultValue={value.image}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </Dialog>
      )}
    </div>
  );
};
export default Fetchapi;
