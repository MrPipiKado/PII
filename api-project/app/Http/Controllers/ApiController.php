<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Player;

class ApiController extends Controller
{
    public function getAllPlayers() {
      $players = Player::get()->toJson(JSON_PRETTY_PRINT);
      return response($players, 200);
    }

    public function createPlayer(Request $request) {
      $player = new Player;
      $player->username = $request->username;
      $player->password = $request->password;
      if (empty($player->username)){
        return response()->json([
          "message" => "empty usernsme"
      ], 400);
      }
      if (empty($player->password)){
        return response()->json([
          "message" => "password usernsme"
      ], 400);
      }
      if (strlen($player->username) < 3){
        return response()->json([
          "message" => "to short usernsme"
      ], 400);
      }
      if (strlen($player->password) < 3){
        return response()->json([
          "message" => "to short password"
      ], 400);
      }
      $player->save();

      return response()->json([
          "message" => "player record created"
      ], 201);
    }

    public function getPlayer($id) {
      if (Player::where('id', $id)->exists()) {
        $player = Player::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
        return response($player, 200);
      } else {
        return response()->json([
          "message" => "Student not found"
        ], 404);
      }
    }

    public function updatePlayer(Request $request, $id) {
      if (Player::where('id', $id)->exists()) {
        $player = Player::find($id);
        $player->username = is_null($request->username) ? $player->username : $player->username;
        $player->password = is_null($request->password) ? $player->password : $player->password;
        $player->save();

        return response()->json([
            "message" => "records updated successfully"
        ], 200);
        } else {
        return response()->json([
            "message" => "Student not found"
        ], 404);
        
    }
    }

    public function deletePlayer ($id) {
      if(Player::where('id', $id)->exists()) {
        $player = Player::find($id);
        $player->delete();

        return response()->json([
          "message" => "records deleted"
        ], 202);
      } else {
        return response()->json([
          "message" => "Student not found"
        ], 404);
      }
    }
}
