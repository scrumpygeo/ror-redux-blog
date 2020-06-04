class Api::V1::PostsController < ActionController::Base
    before_action :set_post, only: [ :show, :update, :destroy]

    def index 
        @posts = Post.all
        render json: @posts
    end

    def show 
        render json: @post
    end

    def create 
        if @post = Post.create(post_params)
          render json: @post
        else
            render_error
        end
    end

    def update 
        # @post = Post.find(params[:id])
        if @post.update(post_params)
            render json: @post
        else
            render_error
        end
    end

    def destroy 
        # @post = Post.find(params[:id])
        @post.destroy 
        head :no_content
    end


    private
        def post_params
            params.require(:post).permit(:title, :categories, :content)
        end

        def set_post 
            @post = Post.find(params[:id])
        end   

        def render_error
            render json: { errors: post.errors.full_messages },
            status: :unprocessable_entity
        end


end
