"use client";
import RotatedText from "@/components/decorators/RotatedText";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addNewProductToStoreAction } from "../actions";
import { useToast } from "@/components/ui/use-toast";

const AddNewProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: createProduct, isPending } = useMutation({
    mutationKey: ["createProduct"],
    mutationFn: async () => await addNewProductToStoreAction({ name, image: imageUrl, price }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });
      toast({ title: "Product Added", description: "The product has been added successfully" });
      setName("");
      setPrice("");
      setImageUrl("");
    },
  });

  return (
    <>
      <p className='text-3xl tracking-tighter my-5 font-medium text-center'>
        Add <RotatedText>New</RotatedText> Product
      </p>

      <form onSubmit={(e) => { e.preventDefault(); createProduct(); }}>
        <Card className='w-full max-w-md mx-auto'>
          <CardHeader>
            <CardTitle className='text-2xl'>New Merch</CardTitle>
            <CardDescription>Add a new product to your store. Provide an image URL.</CardDescription>
          </CardHeader>

          <CardContent className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                type='text'
                placeholder='OnlyPandas Special'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='price'>Price ($)</Label>
              <Input
                id='price'
                type='number'
                required
                value={price}
                placeholder='14.99'
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='imageUrl'>Image URL</Label>
              <Input
                id='imageUrl'
                type='url'
                required
                value={imageUrl}
                placeholder='https://example.com/image.png'
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            {imageUrl && (
              <div className='flex justify-center w-full'>
                <img src={imageUrl} alt='Product Image' className='rounded-md object-contain max-h-96' />
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button className='w-full' type='submit' disabled={isPending}>
              {isPending ? "Adding..." : "Add Product"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
};
export default AddNewProductForm;
