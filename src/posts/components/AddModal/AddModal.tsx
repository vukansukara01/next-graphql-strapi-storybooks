import React, { FC } from 'react';
import styles from './AddModal.module.scss';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import {useCreatePostMutation} from "../../graphql/addPost.generated";
import Spinner from "../../../shared/components/spinner/Spinner";
import * as yup from "yup";

type TAddModal = {
    setOpen: (open: boolean)=> void
}

const AddModal: FC<TAddModal> = ({setOpen}) => {

    const [createPost, {loading}] = useCreatePostMutation();


    const validationSchema = yup.object({
        title: yup.string().required('Please enter Text').min(4, 'Please enter at least 4 characters'),
        body: yup.string().required('Please enter content').min(10, 'Please enter at least 10 characters')

    });

    const formik = useFormik({
        initialValues: { title: '', body: '' },
        onSubmit: (values) => {
            console.log(values);
            createPost({variables: {title: values.title, body: values.body}});
            setOpen(false);
        },
        validationSchema: validationSchema
    });


    if(loading){
        return (<Spinner />)
    }

    return (
        <div className={styles.container}>
            Add new post
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    sx={{ margin: '20px 0' }}
                    id="title"
                    name="title"
                    label="Title"
                    variant="outlined"
                    defaultValue={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                    sx={{ margin: '0 0 20px 0' }}
                    id="body"
                    name="body"
                    label="Text"
                    variant="outlined"
                    defaultValue={formik.values.body}
                    onChange={formik.handleChange}
                    error={formik.touched.body && Boolean(formik.errors.body)}
                    helperText={formik.touched.body && formik.errors.body}
                />
                <Button variant="outlined" type="submit">
                    Add new
                </Button>
            </form>
        </div>
    );
};

export default AddModal;
