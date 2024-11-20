<?php

use App\Http\Controllers\UsuarioController;

Route::post('/api/usuarios', [UsuarioController::class, 'store']);

?>