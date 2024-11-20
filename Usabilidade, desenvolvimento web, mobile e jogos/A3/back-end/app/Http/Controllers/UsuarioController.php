<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UsuariosController extends Controller
{

    public function store(Request $request)
    {

        $request->validate([
            'nome_completo' => 'required|string|max:255',
            'cpf' => 'required|string|max:14',
            'estado' => 'required|string|max:2',
            'cidade' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'senha' => 'required|string|min:8|confirmed',
        ]);

        $usuario = new User;
        $usuario->nome_completo = $request->nome_completo;
        $usuario->cpf = $request->cpf;
        $usuario->estado = $request->estado;
        $usuario->cidade = $request->cidade;
        $usuario->email = $request->email;
        $usuario->senha = bcrypt($request->senha);
        $usuario->save();

        return response()->json(['message' => 'Usuário criado com sucesso.']);
    }
}
