class Api::V1::PostsController < ActionController::Base
    def index 
        @posts = Post.all
        render json: @posts
    end
end
