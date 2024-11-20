<?php

use App\Http\Controllers\UsuariosController;

Route::post('/usuarios', [UsuariosController::class, 'store']);


?>