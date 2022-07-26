import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { TextField, Typography, Box, Button } from "@mui/material";

const Home = () => {
  const { register, control, handleSubmit } = useForm({});

  const { fields, append, remove } = useFieldArray({
    control,
    name: "produto",
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Adicione produto para receita do bolo
      </Typography>

      {fields.map((item, index) => (
        <Box key={item.id}>
          <TextField
            id="outlined-basic"
            label="Escreva o nome do produto"
            variant="outlined"
            {...register(`produto.${index}.nomeProduto`)}
            className="input"
            sx={{
              width: 1,
              my: 2,
              borderRadius: 1,
            }}
          />
          <Button
            variant="outlined"
            className="button"
            onClick={() => remove(index)}
            sx={{ width: 1, mt: 4, borderRadius: 1 }}
          >
            Deletar
          </Button>
        </Box>
      ))}

      <Button
        variant="contained"
        className="button"
        onClick={() => append({ nomeProduto: "" })}
        sx={{ width: 1, mt: 4, borderRadius: 1 }}
      >
        Adicionar novo campo
      </Button>

      <Button
        variant="contained"
        type="submit"
        className="button"
        sx={{ width: 1, mt: 4, borderRadius: 1 }}
      >
        Salvar lista
      </Button>
    </form>
  );
};

export default Home;
