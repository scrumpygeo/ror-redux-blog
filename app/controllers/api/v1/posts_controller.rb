class Api::V1::PostsController < ActionController::Base
    def index 
        @posts = Post.all
        render json: @posts
    end

    def create 
        @post = Post.create(post_params)
        render json: @post
    end

    private
        def post_params
            params.require(:post).permit(:title, :categories, :content)
        end


end
