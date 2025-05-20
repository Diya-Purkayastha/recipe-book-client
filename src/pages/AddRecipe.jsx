import React from 'react';
// import { use } from 'react';
import Swal from 'sweetalert2';
// import { AuthContext } from '../provider/AuthProvider';

const AddRecipe = () => {
    // const { user } = use(AuthContext)

    const handleAddRecipe = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries())
        console.log(newRecipe);
        // const recipe = {
        //     ...newRecipe,
        //     userEmail: user.email,
        //     userName: user.displayName,
        //     userPhoto: user.photoURL,
        // }
        //send recipe data to server
        fetch('http://localhost:3000/recipe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        title: "Recipe added successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }

    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-5xl'> Add Recipe</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleAddRecipe}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Title</label>
                            <input type="text" className="input w-full" name='title' placeholder="Recipe Title" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Ingredients</label>
                            <input type="text" name='ingredients' className="input w-full" placeholder="Recipe Ingredients" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Preparation Time</label>
                            <input type="text" name='time' className="input w-full" placeholder="Recipe Preparation Time" />
                        </fieldset>

                        <div className="dropdown dropdown-center items-center">
                            <div tabIndex={0} role="button" className="btn m-1 w-full "><span className='text-accent'>Cuisine Type</span>  ⬇️</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Italian</a></li>
                                <li><a>Mexican</a></li>
                                <li><a>Indian</a></li>
                                <li><a>Chinese</a></li>
                                <li><a>Others</a></li>
                            </ul>
                        </div>

                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
                        <label className="label">Category</label>
                        <label className="label">
                            <input type="checkbox" className="checkbox" />
                            Breakfast
                        </label>
                        <label className="label">
                            <input type="checkbox" className="checkbox" />
                            Lunch
                        </label>
                        <label className="label">
                            <input type="checkbox" className="checkbox" />
                            Dinner
                        </label>
                        <label className="label">
                            <input type="checkbox" className="checkbox" />
                            Dessert
                        </label>
                        <label className="label">
                            <input type="checkbox" className="checkbox" />
                            Vegan
                        </label>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
                        <label className="label">Instruction</label>
                        <input name='supplier' type="text" className="input w-full" placeholder="Write full instruction" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
                        <label className="label">Photo URL</label>
                        <input name='photoURL' type="text" className="input w-full" placeholder="coffee photoURL" />
                    </fieldset>
                    <button className='btn w-full' type='submit'>Add Recipe</button>
                </form>
            </div>
        </div>
    );
};


export default AddRecipe;